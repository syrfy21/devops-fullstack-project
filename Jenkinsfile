pipeline {
    agent any

    options {
        skipDefaultCheckout() // important
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t fullstack-app .'
            }
        }
    }
}
