const rendercontent = {
    props: ['elements'],
    template: `
        <div>
            <div v-for="element in elements">
                <p v-if="element.paragraph"> {{ element.paragraph }} </p>
                <span v-if="element.string"> {{ element.string }} </span>
                <ul v-if="element.list">
                    <li v-for="item in element.list"> {{ item }} </li>
                </ul>
            </div>
        </div>
    `
}
  