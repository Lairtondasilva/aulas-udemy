const fs = require('fs').promises
const path = require('path')

async function readdir(rootPath){
    rootPath = rootPath || path.resolve(__dirname); //caminho até o diretório atual

    const files = await fs.readdir(rootPath); //ler todos arquivos e pastas do diretório passado
    walk(files, rootPath);
}

async function walk(files, rootDir){
    for(let file of files){
        const fullPathFile = path.resolve(rootDir, file) //caminho do arquivo passado
        const stats = await fs.stat(fullPathFile) //retorna estatíscas sobre o arquivo passado

        if(/.git/g.test(fullPathFile)) continue;
        if(/node_modules/g.test(fullPathFile)) continue;

        if(stats.isDirectory()){
            readdir(fullPathFile);
            continue;
        }
        console.log(file)
    }
}

readdir(path.resolve(__dirname, "..", ".."))