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
        sh 'sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin'
        sh 'docker ps'
      }
    }

  }
}