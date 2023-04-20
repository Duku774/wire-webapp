pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Build') {
      environment {
        user_name = 'Duku774'
        user_mail = 'duku774@gmail.com'
      }
      steps {
        echo 'build stage'
        sh 'yarn'
        sh 'yarn build:prod'
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
        sh 'tar -czvf artefacts/Projekt.tar.gz . --exclude=./artifacts .'
      }
    }

    stage('Publish') {
      steps {
        archiveArtifacts 'artifacts/Projekt.tar.gz'
      }
    }

  }
}