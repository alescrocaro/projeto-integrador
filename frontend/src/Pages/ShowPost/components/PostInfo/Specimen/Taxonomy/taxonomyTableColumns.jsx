import { Input, Select, Switch, Typography, notification } from 'antd';

const TRANSLATE_PATH = 'pages.eventTab.listEvents.tableColumns';

const createTaxonomyColumns = ({ isUpdating }) => {
  // TODO:
  //  - Add update query to data column

  const taxonomyColumns = [
    {
      title: 'Categoria',
      dataIndex: ['category'],
      render: category => {
        return category;
      },
    },
    {
      title: 'Dado',
      dataIndex: ['data'],
      render: (data, record) => {
        if (isUpdating) {
          if (record.category === 'Reino') {
            return (
              <Select
                options={[
                  { value: 'Animalia', label: 'Animalia' },
                  { value: 'Bacteria', label: 'Bacteria' },
                  { value: 'Chromista', label: 'Chromista' },
                  { value: 'Fungi', label: 'Fungi' },
                  { value: 'Plantae', label: 'Plantae' },
                  { value: 'Protozoa', label: 'Protozoa' },
                ]}
                style={{
                  width: '100%',
                }}
                defaultValue={data}
              />
            );
          }
          return <Input defaultValue={data} />;
        }

        return data ?? 'Não informado';
      },
      width: 200,
    },
  ];
  return taxonomyColumns;
};

export default createTaxonomyColumns;
