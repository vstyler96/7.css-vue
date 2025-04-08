<template>
  <div width="w-screen">
    <WinWindow
      active
      draggable
      title="Windows 7 draggable window"
      :default-x="20"
      :default-y="200"
      width="400px"
      maximizable
      minimizable
      color="#4580c4"
      has-space
    >
      This is a draggable window XD
      <br>
      Hello world!
    </WinWindow>

    <WinWindow
      active
      draggable
      title="Windows 7 draggable window"
      :default-x="200"
      :default-y="200"
    >
      This is a draggable window XD x2
      <br>
      Hello world!
    </WinWindow>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <WinWindow
          has-space
          active
          color="#AC0048"
        >
          <div class="grid grid-cols-2 gap-3">
            <!-- Default buttons -->
            <Buttons />

            <!-- Links -->
            <Links />
          </div>
        </WinWindow>
      </div>
      <div>
        <WinWindow has-space active>
          <!-- Tabs System -->
          <Tabs />
        </WinWindow>
      </div>
    </div>

    <WinWindow
      has-space
      active
      color="pink"
    >
      <!-- Progressbars -->
      <Progressbars />
    </WinWindow>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <WinWindow
          has-space
          active
          color="green"
        >
          <div class="grid grid-cols-2 gap-3">
            <!-- Radios -->
            <Radios />

            <!-- Checkboxes -->
            <Checkboxes />
          </div>
        </WinWindow>
      </div>
      <div>
        <WinWindow
          has-space
          active
          color="yellow"
        >
          <div class="grid grid-cols-2 gap-3 py-3">
            <win-balloon
              bottom
              right
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
            />
            <win-balloon
              bottom
              left
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
            />
          </div>
          <div class="grid grid-cols-2 gap-3 py-3">
            <win-balloon
              top
              right
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
            />
            <win-balloon
              top
              left
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
            />
          </div>
        </WinWindow>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3">
      <WinWindow
        has-space
        active
        color="purple"
      >
        <div class="grid grid-cols-3 gap-3">
          <div>
            <!-- Dropdowns -->
            <Dropdowns />
          </div>

          <!-- TreeView -->
          <win-treeview class="has-collapse-button">
            <win-collapse
              title="Javascript"
              open
              :children="[
                {
                  title: 'Avoid at all cost',
                  prpendIcon: 'monitor',
                  children: [
                    { title: 'Avoid' },
                    {
                      title: 'At',
                      prependIcon: 'monitor',
                      children: [
                        { title: 'Avoid' },
                        { title: 'At' },
                        { title: 'All' },
                        { title: 'Cost' },
                      ],
                    },
                    { title: 'All' },
                    { title: 'Cost' },
                  ],
                }
              ]"
            />
          </win-treeview>
          <!-- <li>
            <win-collapse
              title="Unless"
              prepend-icon="monitor"
            >
              <ul>
                <li>Avoid</li>
                <li>
                  <win-collapse title="At">
                    <ul>
                      <li>Avoid</li>
                      <li>At</li>
                      <li>All</li>
                      <li>Cost</li>
                    </ul>
                  </win-collapse>
                </li>
                <li>All</li>
                <li>Cost</li>
              </ul>
            </win-collapse>
          </li> -->

          <div>
            <win-listbox
              v-model="listboxValue"
              class="has-hover"
              :options="options"
            />
            You selected the option: {{ listboxValue }}
          </div>
        </div>
      </WinWindow>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <WinWindow
          has-espace
          active
          color="orange"
        >
          <div class="grid grid-cols-3 gap-3">
            <div>
              <win-slider
                v-model="sliderValue"
                :max="10"
                :min="1"
              />

              You selected the value: {{ sliderValue }}
            </div>

            <div>
              <WinMenu class="can-hover">
                <WinMenuItem title="View">
                  <template #submenu>
                    <WinMenu>
                      <WinMenuItem @click="menuRadioOption = 'lg'">
                        <input
                          id="icon-size-lg"
                          type="radio"
                          value="lg"
                          name="icon-size"
                          :checked="menuRadioOption === 'lg'"
                        >
                        <label for="icon-size-lg">
                          Large icons
                        </label>
                      </WinMenuItem>
                      <WinMenuItem @click="menuRadioOption = 'md'">
                        <input
                          id="icon-size-md"
                          type="radio"
                          value="md"
                          name="icon-size"
                          :checked="menuRadioOption === 'md'"
                        >
                        <label for="icon-sizemd">
                          Medium icons
                        </label>
                      </WinMenuItem>
                      <WinMenuItem @click="menuRadioOption = 'sm'">
                        <input
                          id="icon-size-sm"
                          type="radio"
                          value="sm"
                          name="icon-size"
                          :checked="menuRadioOption === 'sm'"
                        >
                        <label for="icon-size-sm">
                          Small icons
                        </label>
                      </WinMenuItem>

                      <hr>

                      <WinMenuItem @click="arrangeIcons = !arrangeIcons">
                        <input
                          :model-value="arrangeIcons"
                          type="checkbox"
                          name="arrange-icons"
                          label="Auto arrange icons"
                          :value="arrangeIcons"
                          :checked="arrangeIcons"
                        >
                        <label for="arrange-icons">
                          Auto arrange icons
                        </label>
                      </WinMenuItem>
                    </WinMenu>
                  </template>
                </WinMenuItem>

                <hr>

                <WinMenuItem title="Sort by" />
                <WinMenuItem title="Refresh" />
                <WinMenuItem title="Display" />
              </WinMenu>

              <p class="pt-4">
                You have a icons size of: {{ menuRadioOption }}
              </p>
              <p>
                And you have auto arrange icons: {{ arrangeIcons }}
              </p>
            </div>

            <div>
              <WinMenuBar class="can-hover">
                <WinMenuItem title="File">
                  <template #submenu>
                    <WinMenu>
                      <WinMenuItem
                        title="Open"
                        @click="onOpen"
                      />
                      <WinMenuItem
                        title="Save"
                        @click="onSave"
                      />
                      <WinMenuItem
                        title="Exit"
                        @click="onExit"
                      />
                    </WinMenu>
                  </template>
                </WinMenuItem>
                <WinMenuItem
                  title="Edit"
                  @click="onEdit"
                />
                <WinMenuItem
                  title="View"
                  @click="onView"
                />
                <WinMenuItem
                  title="Help"
                  @click="onHelp"
                />
              </WinMenuBar>
            </div>
          </div>
        </WinWindow>
      </div>
      <div>
        <WinWindow
          has-space
          active
          color="teal"
        >
          <div class="grid grid-cols-2 gap-3 py-8">
            <div>
              <win-searchbox
                v-model:search="search"
                placeholder="Search"
                @search="onSearch"
              />
              Your search is: {{ search }}
            </div>
            <div>
              <win-searchbox
                placeholder="Search"
                instant
                @search="onInstantSearch"
              />
              Your instant search is: {{ instantSearch }}
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 py-8">
            <win-button
              text="Show Dialog"
              @click="showDialog = true"
            />
            <WinDialog
              v-model="showDialog"
              title="This is a Dialog"
              permanent
              cancelable
              draggable
              @cancel="onCancel"
              @accept="onAccept"
            >
              <WinProgress indeterminate />
            </WinDialog>
          </div>
        </WinWindow>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import Buttons from './Showcase/Buttons.vue';
import Links from './Showcase/Links.vue';
import Tabs from './Showcase/Tabs.vue';
import Progressbars from './Showcase/Progressbars.vue';
import Radios from './Showcase/Radios.vue';
import Checkboxes from './Showcase/Checkboxes.vue';
import Dropdowns from './Showcase/Dropdowns.vue';

const listboxValue = ref("good");
const sliderValue = ref(4);
const menuRadioOption = ref('lg');
const arrangeIcons = ref(false);
const showDialog = ref(false);

const search = ref(null);
const instantSearch = ref(null);

const options = [
  { name: "5 - Incredible!", id: "incredible" },
  { name: "4 - Great!", id: "great" },
  { name: "3 - Pretty good!", id: "good" },
  { name: "2 - Not so great!", id: "not so" },
  { name: "1 - Unfortunate!", id: "ew" },
];

function onOpen() {
  console.log('Open');
}
function onSave() {
  console.log('Save');
}
function onExit() {
  console.log('Exit');
}
function onEdit() {
  console.log('Edit');
}
function onView() {
  console.log('View');
}
function onHelp() {
  console.log('Help');
}

function onSearch(value) {
  search.value = value;
}

function onInstantSearch(value) {
  instantSearch.value = value;
}

function onCancel() {
  console.log('Cancel');
}
function onAccept() {
  console.log('Accept');
}
</script>
