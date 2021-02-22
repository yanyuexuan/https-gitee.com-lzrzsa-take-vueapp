<template>
  <div id="app">
    
    <!-- <CountIndex />
    <hr />
    <TodoListIndex />
    <hr />
    <SlotsIndex >
      <template v-slot:test="{count,add,minus}">
        <CountShow :count="count"/>
        <CountIButton name="+" @click="add" />
        <CountIButton name="-" @click="minus" />
      </template>
    </SlotsIndex>
    <StudentsIndex /> -->
    <router-view/>
  </div>
</template>

