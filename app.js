function KBooks(...books) {
    const K_Books = books.filter(book => book.includes('к') || book.includes('К'));
    const otherBooks = books.filter(book => !K_Books.includes(book));
  
    console.log('Книги, у которых в названии есть буква "к":');
    console.log(K_Books.join(', '));
  
    console.log('Остальные книги:');
    console.log(otherBooks.join(', '));
  }
  
  KBooks('Война и мир', 'Дом Теней', 'Книга Джунглей', 'Преступление и наказание', 'Колыбельная для кошки', 'Анна Каренина','Первый Учитель', 'Пикник на обочине');