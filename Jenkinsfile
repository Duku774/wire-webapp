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
        sh 'mkdir TestDir && touch ./TestDir/TestFile'
        sh 'git config user.name "TestName" && git config user.email "testname@mail.com"'
        sh '''git add TestDir && git commit -m "Testing commit" && git push
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