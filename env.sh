
echo 'Building .env.js'

# assign all script arguments to a global variables
scriptArgs=$@

# assign the number of script arguments to a global variables
numOfScriptArgs=$#

# Set arrays to of target environments or cloud platforms that may bet passed to this script.
listOfEnvironments=("PROD" "QA" "DEV")

#######################################
# Checks if arguments are passed in to the script, if so, it compares them to the envTypeList
# and "returns" the correct argument that is passed with one that is in the envTypeList list
# ARGUMENTS:
#   $1 Array of strings: list of target environments or a list of target cloud hosts
#   $2 String of the system environment Key name
#   $3 Array of strings:  List of arguments passed when the script is run
#   $4 NUmber of how many arguments were passed to the script.
# OUTPUTS:
#   String of the desired target environment or target cloud platform.
# RETURN:
#   0 if print succeeds, non-zero on error.
#######################################
function getEnvValue () {
    # Give fn parameter names for readability and pass-by-reference
    local -n envTypeList=$1
    local -n envKey=$2
    local -n listOfScriptArgs=$3
    local -n scriptArgsLength=$4

    # check if the total number of args passed into the the script is greater than 0
    if [ $scriptArgsLength -gt 0 ]; then
        # if true arguments passed into script so use those
        # loop over the list (transformed to upper case) passed into the function and see if they match any script arguments passed.
        for item in ${envTypeList[@]^^}; do
            # listOfScriptArgs (transformed to upper case) array contains/includes the item.
            if [[ " ${listOfScriptArgs[*]^^} " =~ " ${item} " ]]; then
                # NOTE: can not return an item 
                echo "$item"
            fi
        done 
    # if no arguments passed so use system env
    else
        # check if a system environment variable is empty [not set]
        if [[ -n "${envKey}" ]]; then
            # return out the set system environment variable
            echo "$envKey"
        fi
    fi
}

#######################################
# Checks if bash version is >= 5.0
# ARGUMENTS:None
# OUTPUTS:
#   String if required bash version exist.
# RETURN: 0 if print succeeds, non-zero on error.
#######################################
check_bash_version() {
    # Check if the Bash version is greater than or equal to 5
    if ((BASH_VERSINFO[0] >= 5)); then
        echo "Has required Bash version"
    else
        echo "Error: Bash version >= 5 is required" >&2
        exit 1
    fi
}
check_bash_version

# Get targetEnvironment by passed script args, or system environment variable
targetEnvironment=$(getEnvValue listOfEnvironments "APP_ENV" scriptArgs numOfScriptArgs)
echo "targetEnvironment: $targetEnvironment"

# set some vars to lowercase for use in a path
lower_targetEnvironment=$(echo "$targetEnvironment" | tr '[:upper:]' '[:lower:]')

# Concatenate base env and target env files based on cloud platform and store in a temp file.
cat ./envConfigs/base.env ./envConfigs/${lower_targetEnvironment}.env > ./envConfigs/temp.env

# Recreate config file
rm -rf ./env.js
touch ./env.js

# Add line to start the object literal in the js file
echo "// eslint-disable-next-line no-underscore-dangle" >> ./env.js
echo "window.env = {" >> ./env.js

# Loop over each line of the temp.env file
while read -r line || [[ -n "$line" ]];
    do
        # Split env variables by character `=`
        if printf '%s\n' "$line" | grep -q -e '='; 
            then
                # assign each key value pair to a variable
                varName=$(printf '%s\n' "$line" | sed -e 's/=.*//')
                varValue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
        fi

        # check if key is APP_ENV
        if [ $varName == "APP_ENV" ]
            then
                # set value to of selected target Environment
                value="${targetEnvironment}"

        # check if the key has a particular string or is empty
        elif [ $varValue == "REPLACE_WITH_SECRET" ] || [ -z $varValue ]
          then

            # set value from system environment variable
            value="${!varName}"

        # If there is a an OKTA_REDIRECT_URI system variable, it takes priority over env doc.
        # check if key OKTA_REDIRECT_URI and if there is a system env for this set.
        elif [ $varName == "OKTA_REDIRECT_URI" ] && [ -n "${OKTA_REDIRECT_URI}" ]
          then

          # set OKTA_REDIRECT_URI to system env value for OKTA_REDIRECT_URI
          value=$OKTA_REDIRECT_URI

        else
            # Otherwise use value from .env file
            value=${varValue}
        fi

        # Append configuration property to JS file
        echo "  $varName: \"$value\"," >> ./env.js
done < ./envConfigs/temp.env

# Add line to end the object literal in the js file
echo "};" >> ./env.js

# Remove temp files as it is not longer needed
rm -rf ./envConfigs/temp.env

echo "env.js was created"


### -----Bash file review-----
# 
# $@:   all script arguments
# $#:   length of $@
# ^^:   convert lowercase characters in a string to uppercase characters.
# [*]:  expand the array into a single word
# [@]:  expand the array into a list of its elements
# -n:   option is used as a test to check if a string is not empty.
# -r:   used to ensure that backslashes in the input are not interpreted as escape characters.
# ||:   OR operator
# grep -q:  searches for a pattern in text and suppress the output with '-q'
# printf '%s\n':    print as string, and end it by a new line   
# sed:    is a stream editor that can be used to perform basic text transformations on an input stream 
# -z:   this option tests whether the string is zero-length.
###