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
        sh 'yarn'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploy stage'
        sh 'yarn build:prod'
        sh 'cd server && yarn start:prod'
      }
    }

  }
}