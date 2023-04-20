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
        sh 'mkdir TestDir && touch ./TestDir/TestFile'
        sh 'git config user.name "$user_name" && git config user.email "$user_mail"'
        sh '''git add TestDir && git commit -m "Testing commit" && git push  origin dev
'''
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
        sh 'mkdir artefacts'
        sh 'tar -czvf artefacts/Projekt.tar.gz . --exclude=./artefacts .'
      }
    }

  }
}