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

    stage('Test') {
      steps {
        echo 'test stage'
        sh 'tar -czvf Projekt.tar.gz .'
      }
    }

  }
}