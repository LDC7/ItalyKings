import ArticleData from './articleData';

class SerializedData{
  title: string;
	desc: string;
	color: number;
}

const tryRequire = (path: string): string | null => {
  try {
   return require(`${path}`);
  } catch (err) {
   return null;
  }
};

export default class DataLoader {

  private static ColorParser(num: number): string {
    switch(num) {
      case -1:
        return '#FBC600';
      case -2:
        return '#007CFF';
      case -3:
        return '#FF4600';
      case 1:
        return '#FFE280';
      case 2:
        return '#3CBDFE';
      case 3:
        return '#FF8D48';
      case 0:
        return '#C1AFA4';
    }

    return '#FFFFFF';
  }

  private static CreateArticleData(id: number): ArticleData {
    const folderPath = `./${id}`;
    const data = new ArticleData();
    data.Id=id;
    
    const serializedData = require(`${folderPath}/data.json`) as SerializedData;
    data.Title = serializedData.title;
    data.Description = serializedData.desc;
    data.BackgroundColor = DataLoader.ColorParser(serializedData.color);

    const imagePath = `${folderPath}/image.png`;
    data.Image = tryRequire(imagePath);
        
    return data;
  }
  
  public static GetAncestors(): Array<ArticleData> {
    const ancestors = new Array<ArticleData>();
    
    ancestors.push(this.CreateArticleData(1));
    ancestors.push(this.CreateArticleData(2));
    ancestors.push(this.CreateArticleData(3));

    return ancestors;
  }

  public static GetArticles(): Array<ArticleData> {
    const articles = new Array<ArticleData>();
    let index = 4;

    while (tryRequire(`./${index}/data.json`) != null)
    {
      articles.push(this.CreateArticleData(index));
      index++;
    }

    return articles;
  }
}
