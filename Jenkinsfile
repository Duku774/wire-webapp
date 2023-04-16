pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'build stage'
        sh 'docker ps'
        sh 'yarn'
      }
    }

    stage('Test') {
      steps {
        echo 'test stage'
        sh 'yarn test'
      }
    }

  }
}