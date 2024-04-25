import { Button, Card, Table } from 'antd';
import { useEffect, useState } from 'react';
import createTaxonomyColumns from './taxonomyTableColumns';

const Taxonomy = ({ post }) => {
  const [isUpdatingTaxonomy, setIsUpdatingTaxonomy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taxonomyData, setTaxonomyData] = useState(false);

  const taxonomyColumns = createTaxonomyColumns({
    isUpdating: isUpdatingTaxonomy,
  });

  const handleUpdateTaxonomyClick = () => {
    setIsLoading(true);
    setIsUpdatingTaxonomy(prev => !prev);
    setIsLoading(false);
  };

  const renderTaxonomyExtraButton = () => {
    if (isUpdatingTaxonomy) {
      return (
        <Button onClick={handleUpdateTaxonomyClick} disabled={isLoading}>
          Salvar
        </Button>
      );
    }

    return (
      <Button onClick={handleUpdateTaxonomyClick} disabled={isLoading}>
        Editar
      </Button>
    );
  };

  useEffect(() => {
    if (post) {
      setTaxonomyData([
        { category: 'Reino', data: post.kingdom },
        { category: 'Filo', data: post.phylum },
        { category: 'Classe', data: post.className },
        { category: 'Ordem', data: post.order },
        { category: 'Família', data: post.family },
        { category: 'Gênero', data: post.genus },
        { category: 'Espécie', data: post.specie },
      ]);
    }
  }, [
    post?.kingdom,
    post?.phylum,
    post?.className,
    post?.order,
    post?.family,
    post?.genus,
    post?.specie,
  ]);

  return (
    <Card title="TAXONOMIA" extra={renderTaxonomyExtraButton()}>
      <Table
        size="small"
        pagination={false}
        columns={taxonomyColumns}
        dataSource={taxonomyData}
      />
    </Card>
  );
};

export default Taxonomy;
