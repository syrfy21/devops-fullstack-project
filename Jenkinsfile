pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/syrfy21/devops-fullstack-project.git'
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
