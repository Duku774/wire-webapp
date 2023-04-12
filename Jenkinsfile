pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node'
        }

      }
      steps {
        echo 'build stage'
        sh 'yarn'
      }
    }

    stage('Test') {
      agent {
        docker {
          image 'node'
        }

      }
      steps {
        echo 'test stage'
        sh 'yarn test'
      }
    }

  }
}