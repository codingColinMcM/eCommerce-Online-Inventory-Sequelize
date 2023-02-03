const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({ include: Product });
  res.status(200).json(categoryData)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, {include: Product });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category by this id!' });
      return;
    }
    res.status(200).json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id
    }});
  res.status(200).json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!categoryData) {
    res.status(404).json({ message: 'no Category found with this id!' });
    // return;
  }

 res.status(200).json(categoryData);
});

module.exports = router;
