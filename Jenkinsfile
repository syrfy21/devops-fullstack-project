pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/syrfy21/devops-fullstack-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker Image..."
                sh '''
                    docker --version
                    docker build -t fullstack-app .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Deploying Docker Container..."
                sh '''
                    # إيقاف الحاوية القديمة إن وُجدت
                    docker stop fullstack || true
                    docker rm fullstack || true

                    # تشغيل الحاوية الجديدة
                    docker run -d -p 3000:3000 --name fullstack fullstack-app
                '''
            }
        }
    }
}
