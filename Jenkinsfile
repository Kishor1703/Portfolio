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
            step{
                git'https://github.com/Kishor1703/Portfolio.git'
            }
        }
        
        stage('Dependencies Installation'){
            step{
                sh'npm install'
            }
        }
        
        stage('build'){
            step{
                sh'npm run build'
            }
        }
        
        stage('Deploye to vercel'){
            step{
                sh'npx vercel --prod --token=$VERCEL_TOKEN --yes'
            }
        }
    }
}