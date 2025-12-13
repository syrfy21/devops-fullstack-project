pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/syrfy21/devops-fullstack-project.git'
            }
        }

        stage('Check Docker') {
            steps {
                sh '''
                    docker --version
                    docker ps
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t fullstack-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop fullstack || true
                    docker rm fullstack || true
                    docker run -d -p 3000:3000 --name fullstack fullstack-app
                '''
            }
        }
    }
}
