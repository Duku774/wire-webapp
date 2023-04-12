pipeline {
  agent {
    docker {
      image 'node'
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