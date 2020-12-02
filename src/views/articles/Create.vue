<template>
    <div class="blog-container">
        <div class="blog-pages">
            <div class="col-md-12 panel">
                <h2 class="text-center">创作文章</h2>
                <hr>
                <div>
                    <div class="form-group">
                        <input @input="saveTitle" v-model.trim="title" placeholder="请填写标题" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <textarea id="editor"></textarea>
                    </div>
                    <br>
                    <div class="form-group">
                        <button class="btn btn-primary" @click="post">发布</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SimpleMDE from "simplemde"
    import hljs from "highlight.js"
    import ls from '@/utils/localStorage'

    export default {
        name: "Create",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        mounted() {
            const simplemde = new SimpleMDE({
                element: document.querySelector('#editor'),
                placeholder: '请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。',
                spellcheck: false,
                autoDownloadFontAwesome: false,
                autosave: {
                    enable: true,
                    uniqueId: 'vuejs-essential'
                },
                renderingConfig: {
                    codeSyntaxHighlighting: true
                }
            });

            simplemde.codemirror.on('change', () => {
                this.content = simplemde.value();
            });

            this.simplemde = simplemde;
            this.fillContent();
        },
        methods: {
            fillContent() {
                const simplemde = this.simplemde;
                const title = ls.getItem('smde_title');
                
                if (title !== null) {
                    this.title = title;
                }

                this.content = simplemde.value();
            },
            saveTitle() {
                ls.setItem('smde_title', this.title);
            },
            post() {
                const title = this.title;
                const content = this.content;

                if (title !== '' && content.trim() !== '') {
                    const article = {
                        title,
                        content
                    };

                    this.$store.dispatch('updateArticle', {article});
                    this.clearData();
                }
            },
            clearData() {
                this.title = '';
                ls.removeItem('smde_title');
                this.simplemde.value('');
                this.simplemde.clearAutosavedValue();
            }
        }
    }
</script>

<style scoped>
    .blog-container { max-width: 980px; margin: 0 auto; margin-top: 20px;}
    textarea { height: 200px; }
</style>