config=setup.txt

# Read answer values from config file
app_name=$(jq -r '.name' $config)
target=$(jq -r '.type' $config)
region=$(jq -r '.region' $config)
slack_channel=$(jq -r '.slackChannel' $config)
team=$(jq -r '.team' $config)
git_init=$(jq -r '.git' $config)

# Replace all occurrences of string in all files
# below dynamic or static (target) folder
function replace {
  local search_str="${1}"
  local replace_str="${2}"

  grep -l "${search_str}" ./$target/{.*,*} -R --exclude=\configure.sh | \
    while read File; \
      do sed -i '' "s|${search_str}|${replace_str}|g" "${File}"; \
    done
}

# Replace tokens with values in files
replace '<<TEMPLATE_APP_NAME>>' ${app_name}
replace '<<TEMPLATE_REGION>>' ${region}
replace '<<TEMPLATE_TEAM_NAME>>' ${team}
replace '<<TEMPLATE_SLACK_CHANNEL>>' ${slack_channel}

# Move target folder contents to root
mv -f ./$target/* ..
mv -f ./$target/.github ..

# Remove template folders
rm -rf ./static/
rm -rf ./dynamic/

# Git changes
cd ..
rm -rf .git
if [[ "$git_init" == *"yes"* ]]; then
  # Init new repo
  git init -q
fi

# TODO: Present instructions about deployment
# - Create github repo
# - git remote add origin git@github.com:simplybusiness/fett-test-app.git
