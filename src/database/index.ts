import AppDataSource from './data-source';

const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.log(error);
  }
};

export default initializeDB;