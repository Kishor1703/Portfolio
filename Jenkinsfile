pipeline{
    
    tools{
        nodejs'Node20'
    }
    
    environment{
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }
    
    agent any
    
    stages{
        stage('Clone'){
            steps{
                git'https://github.com/Kishor1703/Portfolio.git'
            }
        }
        
        stage('Dependencies Installation'){
            steps{
                sh'npm install'
            }
        }
        
        stage('build'){
            steps{
                sh'npm run build'
            }
        }
        
        stage('Deploye to vercel'){
            steps{
                sh'npx vercel --prod --token=$VERCEL_TOKEN --yes'
            }
        }
    }
}