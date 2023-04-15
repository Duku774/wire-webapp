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
        sh 'docker build -f wire-webapp/Dockerfile .'
      }
    }

  }
}