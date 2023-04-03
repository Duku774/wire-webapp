pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:Its-alpine'
    }

  }
  stages {
    stage('build') {
      steps {
        echo 'build stage'
      }
    }

  }
}