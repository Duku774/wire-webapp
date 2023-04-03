pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'build stage'
        sh '''#!/bin/bash
apt-get install -y iputils-ping
ping google.com'''
      }
    }

  }
}