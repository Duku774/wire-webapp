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
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploy stage'
        sh 'mkdir artifacts'
        sh 'tar -czvf artifacts/Projekt.tar.gz . --exclude=./artifacts .'
      }
    }

    stage('Publish') {
      steps {
        echo 'publish stage'
        archiveArtifacts 'artifacts/Projekt.tar.gz'
      }
    }

  }
}