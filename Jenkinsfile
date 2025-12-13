pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t fullstack-app .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                  docker stop fullstack-app || true
                  docker rm fullstack-app || true
                  docker run -d -p 3000:3000 --name fullstack-app fullstack-app
                '''
            }
        }
    }
}

