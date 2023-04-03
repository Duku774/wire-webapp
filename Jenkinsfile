pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        echo 'build stage'
        sh '''!#/bin/bash
curl google.com'''
      }
    }

  }
}