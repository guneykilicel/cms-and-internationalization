export const fetchPosts = async (locale: string) => {
    const res = await fetch(`http://localhost:1337/api/products?locale=${locale}`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await res.json();
    // console.log(data); // Veriyi kontrol et
    return data;
  };
  