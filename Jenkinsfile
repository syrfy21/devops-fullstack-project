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
                sh '''
                    echo "Building Docker Image..."
                    docker build -t fullstack-app .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    echo "Stopping any existing container..."
                    docker stop fullstack || true
                    docker rm fullstack || true

                    echo "Running new container..."
                    docker run -d --restart=always -p 3000:3000 --name fullstack fullstack-app
                '''
            }
        }
    }
}
