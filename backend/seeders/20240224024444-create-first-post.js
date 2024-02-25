"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Caramujo Africano",
          description: "caramujo lorem ipsum",
          tags: ["Caramujo"],
          dateFound: "2024-02-24T02:32:42.670Z",
          // contested: 0,
          userId: "2fe3820e-af20-4296-b580-d2a12743d6d4",
          userName: "Usuário",
          kingdom: "Animalia",
          phylum: "Não Especificado",
          className: "Não Especificado",
          order: "Não Especificado",
          family: "Não Especificado",
          genus: "Não Especificado",
          specie: "Não Especificado",
          imgUrl: "",
          biome: "Campo (bioma)",
          weather: "Cfb - Clima Oceânico Temperado",
          country: "BR",
          city: "Campo Mourão",
          latlng: {
            type: "Point",
            coordinates: ["-52.345179", "-24.012796"],
          },
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
