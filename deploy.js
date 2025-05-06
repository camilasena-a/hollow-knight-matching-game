// @ts-check
import fs from 'fs';
import { execSync } from 'child_process';

// Passos para o deploy
console.log('Iniciando processo de deploy para o GitHub Pages...');

// 1. Garantir que todos os arquivos necessários existam
console.log('Verificando arquivos necessários...');
if (!fs.existsSync('.nojekyll')) {
  console.log('Criando arquivo .nojekyll...');
  fs.writeFileSync('.nojekyll', '');
}

// 2. Garantir que a pasta public exista
if (!fs.existsSync('public')) {
  console.log('Criando pasta public...');
  fs.mkdirSync('public');
}

// 3. Garantir que o arquivo 404.html esteja na pasta public
if (!fs.existsSync('public/404.html')) {
  console.log('Erro: arquivo public/404.html não encontrado!');
  process.exit(1);
}

// 4. Executar o build
console.log('Executando build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Erro durante o build:', error);
  process.exit(1);
}

// 5. Copiar arquivos importantes para a pasta dist
console.log('Copiando arquivos essenciais para dist...');
fs.copyFileSync('.nojekyll', 'dist/.nojekyll');
if (fs.existsSync('public/404.html')) {
  fs.copyFileSync('public/404.html', 'dist/404.html');
}
if (fs.existsSync('public/index.html')) {
  fs.copyFileSync('public/index.html', 'dist/404.html');
}

// 6. Executar o deploy
console.log('Executando deploy para GitHub Pages...');
try {
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  console.log('Deploy concluído com sucesso!');
} catch (error) {
  console.error('Erro durante o deploy:', error);
  process.exit(1);
}

console.log('Processo de deploy finalizado com sucesso!'); 