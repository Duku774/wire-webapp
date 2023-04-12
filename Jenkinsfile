pipeline {
  agent {
    docker {
      image 'node:16.13.1-alpine'
    }

  }
  stages {
    stage('build') {
      agent any
      steps {
        echo 'build stage'
        sh 'curl google.com'
      }
    }

  }
}