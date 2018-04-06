<template>
  <div>
    <h2>got "{{ allWorlds[0].world }}"</h2>
    <p v-if="$apollo.loading">Loading...</p>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    name: 'world',
    apollo: {
        allWorlds: gql`
            {
                allWorlds {
                    world
                }
            }
        `,
    },
    data() {
        return {
            allWorlds: [
                {
                    world: 'world',
                },
            ],
        };
    },
};
</script>

