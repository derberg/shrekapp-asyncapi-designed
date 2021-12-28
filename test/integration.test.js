const path = require('path');
const Generator = require('@asyncapi/generator');
const {readFile} = require('fs').promises;
const crypto = require('crypto');
const fetch = require('node-fetch');
const fs = require('fs');

const TEST_RESULT_PATH = path.join('test', 'temp',' integrationTestResult');
const URL = 'https://raw.githubusercontent.com/Krishks369/shrekapp-asyncapi-designed/main/asyncapi.yaml'

describe('template integration test using generator', () => {
    const generateFolderName = () =>{
        return path.resolve(TEST_RESULT_PATH, Date.now().toString());
    };

    jest.setTimeout(30000);

it('should generate application files ', async () =>{
    const outputDir = generateFolderName();
    const asyncapiFile = await fetch(URL);


    
const generator = new Generator(path.normalize('./'), outputDir, {forceWrite: true} );
await generator.generateFromString(await asyncapiFile.text()) ;    
const expectedFiles = [
    'Dockerfile',
    'README.md',
    'src/api/index.js',
    'src/api/routes.js',
    'src/api/services/chat.js',
    'src/api/services/travel-status.js'


];

for (const index in expectedFiles){
    const file = await readFile( expectedFiles[index], 'utf8');
    expect(file).toMatchSnapshot();
}


});
});