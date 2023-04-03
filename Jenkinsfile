pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('build') {
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        echo 'build stage'
      }
    }

  }
}