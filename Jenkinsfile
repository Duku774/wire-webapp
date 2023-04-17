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
        sh 'yarn build:prod'
        sh 'mkdir artefacts'
        sh 'tar -czvf artefacts/Projekt.tar.gz . --exclude=./artefacts .'
      }
    }

    stage('Test') {
      steps {
        echo 'test stage'
      }
    }

  }
}