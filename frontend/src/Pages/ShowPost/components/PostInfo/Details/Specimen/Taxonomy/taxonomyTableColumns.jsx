import { Form, Input, Select } from 'antd';
import { ptToEnTaxonomy } from '../../../../../../../structures/constants/taxonomy';
import Formatter from '../../../../../../../utils/formatter';

const createTaxonomyColumns = ({ isUpdating }) => {
  const taxonomyColumns = [
    {
      title: 'Categoria',
      dataIndex: 'category',
    },
    {
      title: 'Dado',
      dataIndex: 'data',
      render: (data, record) => {
        if (isUpdating) {
          const formItemName =
            ptToEnTaxonomy[
              Formatter.removeAccent(record.category).toLowerCase()
            ];

          let updateField = <Input defaultValue={data} />;
          if (formItemName === 'kingdom') {
            updateField = (
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

          return (
            <Form.Item name={formItemName} style={{ marginBottom: 0 }}>
              {updateField}
            </Form.Item>
          );
        }

        return data ?? 'Não informado';
      },
      width: 200,
    },
  ];
  return taxonomyColumns;
};

export default createTaxonomyColumns;
