const posts = {
    1: {
        title: "RECEITA",
        image: "https://www.bandnewsdifusora.com.br/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-16-at-17.54.00.jpeg",
        description: "Jarqui frito: Conheça as propriedades do peixe favorito dos amazonenses, acompanhado da receita especial do chef",
        content: "Se tem um peixe que é conhecido por qualquer amazonense, é o jaraqui. O ditado já é conhecido: “Quem come jaraqui, não sai daqui”. Popular pelo preço acessível e pelo sabor agradável, o jaraqui figura entre os favoritos dos amazonenses e por vezes, daqueles que sem esperar, acabam se surpreendendo com o sabor do peixe. Mas você conhece as propriedades nutritivas do peixe? Se preparado de determinada forma, o jaraqui pode ser uma grande fonte de proteínas e ômega 3. No ‘Até o Tucupi’ desta semana, o chef Procópio nos dá com exclusividade a receita de jaraqui frito que ele serve em seu restaurante.",
        authorPhoto: "https://scontent.fpll6-2.fna.fbcdn.net/v/t39.30808-6/480549462_9358247470920910_8687813206301882696_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDWkMu9peXZRVdne56lSIuxgUHMTYsAjzGBQcxNiwCPAuciU4Cu-GeOqLBAl9NbtLipjUHCO6q_byGGvHQYwFh&_nc_ohc=Eel7iORM0psQ7kNvgFyCEP7&_nc_oc=Adhdnbjbc7dOvSynOYji7CRzjBLCUPCwP5RxuaWQXLrPtP4DkM_QiMP_p35TyxufTfuFEVnlt2FPPcdCAG2ulOzN&_nc_zt=23&_nc_ht=scontent.fpll6-2.fna&_nc_gid=K8L60H8IffAtuHca_4mTsw&oh=00_AYGmOiFISnTjdjbooVb4DnWID3pY0G_peSwG0IkPq8bu3Q&oe=67DE1AC9",
        authorName: "Macson Brandão",
        authorDate: "17/03/2025"
    }, 
    2: {
        title: "RECEITA",
        image: "https://www.rotemix.com.br/sys/fotos-artigos/471/rm_66fac26aef253.webp",
        description: "Pirarucu de Casaca: Receita Tradicional Amazônica Passo a Passo",
        content: "O Pirarucu é um peixe típico da Região Amazônica, encontrado nos rios de água doce. Muito valorizado na culinária local, é uma opção de pescado presente em muitos restaurantes da região e nas mesas dos manauaras. Pode ser encontrado tanto em filés quanto inteiro, trazendo consigo um sabor único e nutritivo.",
        authorPhoto: "https://media.istockphoto.com/id/1353291704/pt/foto/handsome-black-businessman-portrait.jpg?s=612x612&w=0&k=20&c=M32rhe5ToKb8gV_lg7hvfNcBKy5uChWIr6EXt6TH8rg=",
        authorName: "João Silva",
        authorDate: "18/03/2025"
    },
    3: {
        title: "RECEITA",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/a5/39/25/peixaria-zagaia.jpg",
        description: " Matrinxã assada na brasa (sem espinhas)",
        content: "A Matrinxã é um peixe típico da Amazônia e pode ser preparada de várias maneiras. Uma receita popular é a Matrinxã assada na brasa, onde o peixe é temperado com sal e limão, marinado por 15 minutos, e depois assado até ficar dourado. Outra opção é a Matrinxã recheada com farofa de banana, que combina o sabor do peixe com a doçura da banana e a crocância da farofa ",
        authorPhoto: "https://img.freepik.com/fotos-gratis/close-up-mulher-morena-olhando-para-a-camera-sobre-cinza_171337-1000.jpg?semt=ais_hybrid",
        authorName: "Ana Oliveira",
        authorDate: "19/03/2025"
    },
    4: {
        title: "RECEITA",
        image: "https://cdn.midiamax.com.br/wp-content/uploads/2021/12/Pacu.jpg",
        description: "Receita de Pacu assado recheado com farofa para fazer em casa",
        content: "O Pacu é um peixe muito apreciado na culinária brasileira, especialmente na região amazônica. Uma receita popular é o Pacu assado, que pode ser preparado de várias maneiras.",
        authorPhoto: "https://i.pinimg.com/736x/24/16/a5/2416a57ec634dfebcfcc3cf6fad1bc7d.jpg",
        authorName: "Carlos Pereira",
        authorDate: "20/03/2025"
    }
};


function post(postId) {
    const postDetails = posts[postId];
    
    if(postDetails) {
        const url = `post-portal.html?title=${encodeURIComponent(postDetails.title)}&image=${encodeURIComponent(postDetails.image)}&description=${encodeURIComponent(postDetails.description)}&content=${encodeURIComponent(postDetails.content)}&authorPhoto=${encodeURIComponent(postDetails.authorPhoto)}&authorName=${encodeURIComponent(postDetails.authorName)}&authorDate=${encodeURIComponent(postDetails.authorDate)}`;
        window.location.href = url;
    } else {
        alert("Post não encontrado.");
    }
}
