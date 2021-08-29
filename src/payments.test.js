describe('payments component', async assert => {
    const payment = (employees, rowsSelected) =>
        render(<Emmploye emplyees rowsSelected />)
        ;
    {
        const rowsSelected = [3];
        const employees = [{ "id": 1, "first_name": "Babita", "last_name": "Attwoull", "email": "battwoull0@istockphoto.com", "gender": "Female", "birthdate": "31/08/1989", "salary": "€2751,61" },
        { "id": 2, "first_name": "Norrie", "last_name": "Bourgaize", "email": "nbourgaize1@google.cn", "gender": "Female", "birthdate": "08/11/2009", "salary": "€2671,32" },
        { "id": 3, "first_name": "Les", "last_name": "Ruck", "email": "lruck2@list-manage.com", "gender": "Male", "birthdate": "15/04/2007", "salary": "€2068,50" }]
        const $ = payment(emplyees, rowsSelected);
        assert({
            given: 'a click count',
            should: 'render the correct number of clicks.',
            actual: $('.plMms').click(),
            expected: emplyees[2].paymented.toBeTrue()
        });
    }
    {
        const count = 5;
        const $ = createCounter(count);
        assert({
            given: 'a click count',
            should: 'render the correct number of clicks.',
            actual: parseInt($('.clicks-count').html().trim(), 10),
            expected: count
        });
    }
});