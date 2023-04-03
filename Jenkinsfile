pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('build') {
      agent {
        docker {
          image 'node'
        }

      }
      steps {
        echo 'build stage'
      }
    }

  }
}