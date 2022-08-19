<!-- 
  # Grid System
    * v-container
    * v-row : 가로
      - align : 하위 v-col 다 정렬
    * v-col : 가로 안 데이터
      - align-center : 자기만 정렬
-->
<template>
  <v-container
    fluid
  >
    <v-card>
      <v-row
        align="end"
        class=" pa-3 red"
        :style="{height: '130px'}"
      >
        <v-col
          align-self="start"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      
      <v-row
        align="end"
        class=" pa-3 yellow"
        :style="{height: '130px'}"
      >
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  export default {};
</script>
