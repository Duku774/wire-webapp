pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node'
    }

  }
  stages {
    stage('build') {
      agent {
        docker {
          args '-p 3000:3000'
          image 'node'
        }

      }
      steps {
        echo 'build stage'
      }
    }

  }
}