workflow "Push to Publish" {
  on = "push"
  resolves = ["Gatsby Build"]
}

action "Npm install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
}

action "Gatsby Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run build"
  needs = ["Npm install"]
  secrets = ["GITHUB_TOKEN", "GRAPHCMS_ENDPOINT", "GRAPHCMS_TOKEN"]
}
