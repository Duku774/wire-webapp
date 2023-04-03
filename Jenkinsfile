pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('build') {
      agent {
        docker {
          image 'node:latest'
          args '-p 3000:3000'
        }

      }
      steps {
        echo 'build stage'
      }
    }

  }
}