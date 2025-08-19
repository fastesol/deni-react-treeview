import React from 'react'
import MuaazReactTreeView from "../../../components"

const ToAJavaScriptObject = () => {
  return <MuaazReactTreeView items={ fruitsAndVegetables } />
}

export default  ToAJavaScriptObject

const fruitsAndVegetables = [
    {
      id: 100,
      text: 'Fruits',
      children: [
        {
          id: 101,
          text: 'Orange',
          isLeaf: true
        },
        {
          id: 102,
          text: 'Banana',
          isLeaf: true
        }
      ]
    },
    {
      id: 200,
      text: 'Vegetables',
      children: [
        {
          id: 201,
          text: 'Carrot',
          isLeaf: true
        },
        {
          id: 202,
          text: 'Tomato',
          isLeaf: true
        }
      ]
    }
  ];  